export interface mapPayloadType{
    latitue:string;
    longitude:string;
}

export interface dustbinPayload{
weight :number;
location:Array<mapPayloadType>;
fill_level:boolean;
}