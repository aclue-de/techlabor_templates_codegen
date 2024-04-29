import {UserRequestDto} from "../state/api/rawApi";

export default function createUser(i: number): UserRequestDto {
    return {
        name: `User${i}`,
        birthday: new Date(`01.02.${1900 + i}`).toISOString(),
        addresses: [
            {
                fullAddress: `New Street ${i}, ${12345 + i} Townsville`
            },
            {
                fullAddress: `Main Street ${i}, ${54321 + i} Citytown`
            }
        ],
    }
}
