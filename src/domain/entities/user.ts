export interface User {
    id: string,
    name: string,
    age: number,
    category: "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "PRO",
    gender: "MALE" | "FEMALE",
    invitationCode: string,
}
