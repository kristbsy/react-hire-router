export interface Person {
    name: {
        first: string,
        last: string,
    };
};

export interface HiredPerson extends Person{
    wage: number,
}