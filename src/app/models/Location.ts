export class Services {
  beds?: boolean;
  clothing?: boolean;
  childCare?: boolean;
  recActivities?: boolean;
  donations?: boolean;
  education?: boolean;
  jobPlacement?: boolean;
  interview?: boolean;
};

export class Hours {
  day: string;
  openTime: number;
  openPeriod: string;
  closeTime: number;
  closePeriod: string;
};


export class Location {
  id?: number;
  title?: string;
  website?: string;
  userEmail?: string;
  contactEmail?: string;
  contactPhone?: number;
  fullAddress?: string;
  streetAddress1?: string;
  streetAddress2?: string;
  city?: string;
  state?: string;
  zipcode?: number;
  country?: string;
  aboutUs?: string;
  servingMon?: Hours;
  servingTue?: Hours;
  servingWen?: Hours;
  servingThur?: Hours;
  servingFri?: Hours;
  servingSat?: Hours;
  servingSun?: Hours;
  mon?: Hours;
  tue?: Hours;
  wen?: Hours;
  thur?: Hours;
  fri?: Hours;
  sat?: Hours;
  sun?: Hours;
  servicesAvailable?: Services;
};