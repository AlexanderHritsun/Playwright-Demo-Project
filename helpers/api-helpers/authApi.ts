import CommonApi from './commonApi';
const frisby = require('frisby');

export interface IUserSignInPayload {
    userName: string;
    phoneNumber: string;
    authenticationCodeDeliveryMethod: number;
    pushId: string;
    phoneType: number;
}

export interface IUserSignInResponse {
    otp: string;
}

export interface IUserSignUpResponse {
    token: string;
    id: string;
    userName: string;
    phoneNumber: string;
    pushId: string;
    phoneType: number;
}

class AuthApi extends CommonApi {
    signInEndpoint = 'api/sign-in';
    confirmEndpoint = `${this.signInEndpoint}/confirm`;

    initializeUserSignIn(userIfo: IUserSignInPayload) {
        return frisby.post(this.signInEndpoint, {
            ...userIfo
        });
    }

    confirmUserSignUp(phoneNumber: string, otp: string) {
        return frisby.post(this.confirmEndpoint, {
            phoneNumber,
            otp
        });
    }
}

export const authApi = new AuthApi();