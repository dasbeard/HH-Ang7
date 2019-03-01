export class GeoLocation {
  "results"?: [
    {
      address_components: [
        {
          long_name?: String;
          short_name?: String;
          types?: [];
        },
        {
          long_name?: String;
          short_name?: String;
          types?: [];
        },
        {
          long_name?: String;
          short_name?: String;
          types?: [];
        },
        {
          long_name?: String;
          short_name?: String;
          types?: [];
        },
        {
          long_name?: String;
          short_name?: String;
          types?: [];
        },
        {
          long_name?: String;
          short_name?: String;
          types?: [];
        },
        {
          long_name?: String;
          short_name?: String;
          types?: [];
        }
      ];
      formatted_address?: String;
      geometry?: {
        location?: {
          lat?: number;
          lng?: number;
        };
        location_type?: String;
        viewport?: {
          northeast?: {
            lat?: number;
            lng?: number;
          };
          southwest?: {
            lat?: number;
            lng?: number;
          };
        };
      };
      place_id?: String;
      types?: [];
    }
  ];
}
