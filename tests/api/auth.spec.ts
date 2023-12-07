import {IUserSignInPayload, IUserSignInResponse} from "../../helpers/api-helpers/authApi";
import {faker} from "faker"

let newUserData: IUserSignInPayload;
const usersTokensToDelete = [];

describe('Sign-in and sign-up tests', () => {
    beforeEach(async () => {
        newUserData = {
            userName: `test.user${new Date().getMilliseconds()}@gmail.com`,
            phoneNumber: faker.phone.number('+61491######'),
        };
    });

    it('Register user via SMS', async () => {
        let otp: string;

        await authApi.initializeUserSignIn(newUserData).then((response) => {
            otp = response.json.otp;

            expect(response.json).toMatchObject<IUserSignInResponse>({
                otp: expect.any(String)
            });
            expect(response.status).toEqual(201);
        });

        await authApi.confirmUserSignUp(newUserData.phoneNumber, otp).then((res) => {
            const response = res.json;
            usersTokensToDelete.push(response.token);

            expect(response).toMatchObject<IUserSignUpResponse>({
                token: expect.any(String),
                userName: newUserData.userName,
                phoneNumber: newUserData.phoneNumber,
                pushId: expect.any(String),
                id: expect.any(String),
                phoneType: expect.any(Number)
            });
            expect(res.status).toEqual(201);
        });
    });

    afterAll(async () => {
        const requestsArr = usersTokensToDelete.map((token) => {
            return usersApi.deleteCurrentUser(1, token);
        });
        await Promise.all(requestsArr);
    });
});