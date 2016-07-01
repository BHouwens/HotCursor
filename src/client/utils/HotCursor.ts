import * as moment from 'moment';
import * as h337 from 'heatmap.js';
import * as firebase from 'firebase';


/*-------------- Interfaces --------------*/ 

interface IInitConfig {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    storageBucket: string;
}

interface IDataPoint {
    timestamp: any;
    x: number;
    y: number;
}

interface IHeatMapDataPoint {
    x: number;
    y: number;
    value: number;
}

interface IHeatMapConfig {
    container: HTMLDivElement;
    radius: number;
}


/*-------------- Module --------------*/ 

class HotCursor {
    db: any;
    internalRef: any;
    uuid: string;
    step: number;
    heatmap: any;
    
    constructor() {
        this.db = null;
        this.internalRef = null;
        this.uuid = '';
        this.step = 0;
        this.heatmap = null;
    }
    

    /**  
     *  Starts HotCursor up. 
     * 
     *  @param {IInitConfig} config - You can get this directly from Firebase
     *  @param {string} ref - The Firebase DB child node to attach data to. Optional
     */
    
    initialise(config: IInitConfig, ref: string = null) {
        firebase.initializeApp(config);
        this.db = firebase.database();

        this.createUserSession(ref);
    }
    

    /**
     *  Creates a new session in the DB when a user begins. Only called internally.
     * 
     *  @param {string} passedRef - The DB to set the internal data reference to
     */
    
    createUserSession(passedRef: string) {
        this.uuid = 'user-' + this.generateUuid();
        this.internalRef = passedRef === null ? this.db.ref() : this.db.ref(passedRef);
        
        this.internalRef.child(this.uuid).set({});
    }
    

    /** 
     *  Generates a UUID 
     */
    
    generateUuid(): string {
        function s4(): string {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
    

    /** 
     *  Sends mouse coordinates and timestamp to the Firebase DB
     * 
     *  @param {number} x - Mouse's x-axis coordinate
     *  @param {number} y - Mouse's y-axis coordinate
     */
    
    sendMouseCoordinates(x: number, y: number) {
        let timestamp = moment().format('MMM DD hh:mm:ss'),
            postObj: IDataPoint = { timestamp, x, y },
            mouseCoordinateData = this.internalRef.child(this.uuid);
            
        mouseCoordinateData.child(this.step).set(postObj);
        this.step += 1;
    }
    
    
    /** 
     *  Logs all the UUIDs for the current project so they can
     *  be viewed or logged for data retrieval
     */
    
    logAllSessionIDs(){
        if (this.internalRef){
            console.log('--------');
            console.log('UUIDS FOR CURRENT PROJECT:');
            console.log('--------');
            
            this.internalRef.once('value', snap => {
               Object.keys(snap.val()).map(value => {
                   console.log(value);
               });
               
               console.log('--------');
            });
        }else{
            throw new Error('You need to initialise HotCursor with a Firebase DB to fetch UUIDs');
        }
    }
    
    
    /**  
     *  Generate a heatmap of the data for the given UUID. If no UUID is given,
     *  it will use the data from the current user session 
     * 
     *  @param {IHeatMapConfig} config - Heatmap.js config, consisting of container for heatmap and radius
     *  @param {string} uuid - UUID whose data will be used for heatmap generation. Optional
     */
    
    generateHeatMap(config: IHeatMapConfig, uuid: string = this.uuid){
        if (uuid.indexOf('user-') == -1) uuid = 'user-' + uuid;
        
        if (this.internalRef.child(uuid)){
            this.heatmap = h337.create(config);
            
            this.internalRef.child(uuid).once('value', snap => {
                let dataFromDatabase = snap.val(),
                    heatmapData: IHeatMapDataPoint[] = dataFromDatabase.map(entry => {
                        return {
                            x: entry.x,
                            y: entry.y,
                            value: 80
                        };
                    });
                
                this.heatmap.setData({ max: 2000, data: heatmapData });
            }); 
        }else{
            throw new Error(
                `The UUID ${uuid} doesn't exist for the current project. 
                 Make sure the UUID you've provided is correct`
            );
        }
    }
}

export const hotCursor = new HotCursor();