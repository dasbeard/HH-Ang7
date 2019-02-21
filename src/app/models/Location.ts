export class OrgServices {
  beds?: boolean;
  clothing?: boolean;
  childCare?: boolean;
  recActivities?: boolean;
  donations?: boolean;
  education?: boolean;
  jobPlacement?: boolean;
  interview?: boolean;
}

export class Hours {
  day: string;
  openTime: number;
  openPeriod: string;
  closeTime: number;
  closePeriod: string;
}

export class GeoLocation {
  latitude?: number;
  longitude?: number;
}

export class OrganizationInfo {
  id?: string;
  title?: string;
  website?: string;
  userEmail?: string;
  contactEmail?: string;
  phone?: number;
  formattedAddress?: string;
  streetAddress1?: string;
  streetAddress2?: string;
  city?: string;
  neighborhood?: string;
  state?: string;
  zipcode?: number;
  country?: string;
  aboutUs?: string;
  services?: OrgServices;
  otherServices?: string;
  location?: GeoLocation;
}

export class userLocation {
  latitude: number;
  longitude: number;
  zoomLevel?: number;
  urlIcon?: string;
}
