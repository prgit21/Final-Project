export interface mapPayloadType{
    latitue:string;
    longitude:string;
}

export interface dustbinPayload{
weight :number;
location:Array<mapPayloadType>;
fill_level:boolean;
}


export interface fetchResponseType {
    status: string;
    message: string;
    data: mapPayloadType;
  }
  
  