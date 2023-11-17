import React from "react";
import {HomeInfinite} from "../../components/infinite_text/infinite_text";
import HomeButton from "../../components/home_buttons/home_buttons";

export default function Home() {
    return (
        <div style={{height: '100%', display: 'flex', flexDirection: 'column', overflowX: 'hidden'}}>
            <HomeInfinite/>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: "center",
                alignContent: 'center',
                alignItems: 'center',
                flex: 1
            }}>
                <HomeButton url={'about'}><div>about</div></HomeButton>
                <HomeButton url={'experience'}><div>experience</div></HomeButton>
                <HomeButton><s>projects</s></HomeButton>
                <HomeButton><s>blog</s></HomeButton>
                <HomeButton><s>articles</s></HomeButton>
            </div>
        </div>
    )
}