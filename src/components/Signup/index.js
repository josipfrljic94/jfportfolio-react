import React from 'react';
import {SignContainer,SignForm,SignItem, SignLabel,SignInput,BtnWrapper} from "./SignupE";
import{ Button} from "../ButtonElement"


const Signup = () => {
    return (
        <SignContainer>
           
            <SignForm>
                <SignItem>
                    <SignLabel>First name</SignLabel>
                    <SignInput type="text"></SignInput>
                </SignItem>
                <SignItem>
                    <SignLabel>Last name</SignLabel>
                    <SignInput  type="text"></SignInput>
                </SignItem>
                <SignItem>
                    <SignLabel>Email</SignLabel>
                    <SignInput  type="email"></SignInput>
                </SignItem>
                <SignItem>
                    <SignLabel>Password</SignLabel>
                    <SignInput  type="password"></SignInput>
                </SignItem>
                <BtnWrapper>
                    <Button big="true" fontBig="true">Sign up</Button>
                </BtnWrapper>
            </SignForm>
        </SignContainer>
    )
}

export default Signup
