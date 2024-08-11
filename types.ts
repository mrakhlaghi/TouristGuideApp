// Type definitions
interface AddressInfo {
    zip: string | null;
    city: string | null;
    region: string;
    address: string;
    borough: string;
    countryCode: string;
  }
  
  interface WorkHour {
    hour: number;
    minute: number;
  }
  
  interface WorkTimeEntry {
    open: WorkHour;
    close: WorkHour;
  }
  
  export interface Timetable {
      saturday?: WorkTimeEntry[];
      sunday?: WorkTimeEntry[];
      monday?: WorkTimeEntry[];
      tuesday?: WorkTimeEntry[];
      wednesday?: WorkTimeEntry[];
      thursday?: WorkTimeEntry[];
      friday?: WorkTimeEntry[];
  }
  
  interface WorkHours {
    timetable: Timetable;
  }
  
  interface WorkTime {
    work_hours: WorkHours;
  }
  
  export interface BusinessLink {
    type: string;
    value: string;
    source: string;
  }
  
  export interface Business {
    id: string;
    title: string;
    description: string | null;
    type: string;
    industry: string;
    addressInfo: AddressInfo;
    phone: string;
    mail: string[];
    logo: string ;
    media: any[]; 
    latitude: string;
    longitude: string;
    has_delivery?:boolean,
    has_in_store_shopping?:boolean,
    has_delivery_same_day?:boolean,
    tags: string[];
    workTime: WorkTime;
    businessLinks: BusinessLink[];
  }
  
