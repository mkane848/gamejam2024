export interface Pet {
    id?: string;
    name: string;
    trainer: string;
    status: Status;
    environment: Environment;
}

export class PetDefaultValues implements Pet {
    name: string = 'My Pet';
    trainer: string = 'Your Name';
    status: Status = new StatusDefaultValues();
    environment: Environment = new EnvironmentDefaultValues();
}

export interface Status {
    age: number;
    weight: number;
    strength: number;
    hunger: number;
    energy: number;
    sleeping: boolean;
    ill: boolean;
}

export class StatusDefaultValues implements Status {
    age: number = 0;
    weight: number = 0;
    strength: number = 0;
    hunger: number = 0;
    energy: number = 0;
    sleeping: boolean = false;
    ill: boolean = false;
}

export interface Environment {
    clean: boolean;
    lightOn: boolean;
}

export class EnvironmentDefaultValues implements Environment {
    clean: boolean = true;
    lightOn: boolean = true;
}