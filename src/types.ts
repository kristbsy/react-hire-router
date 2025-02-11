export interface Person {
    name: {
        first: string,
        last: string,
    };
    id: number,
};

export interface HiredPerson extends Person{
    wage: number,
}