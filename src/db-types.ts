export interface Employee {
  uuid: string;
  firstName: string;
  lastName: string;
  divisionUuid: string;
  divisionName: string;
  cityUuid: string;
  cityName: string;
  positionUuid: string;
  positionName: string;
}

export interface City {
  uuid: string;
  name: string;
}

export interface DivisionSource {
  uuid: string;
  name: string;
  cityUuid: string;
}

export interface PositionSource {
  uuid: string;
  name: string;
}
