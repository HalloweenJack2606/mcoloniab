import React from "react";
import {HomeInfinite} from "../../components/infinite_text/infinite_text";
import HomeButton from "../../components/home_buttons/home_buttons";

export default function Home() {
    return (
        <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
            <HomeInfinite/>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: "center",
                alignContent: 'center',
                alignItems: 'center',
                flex: 1
            }}>
                <HomeButton url={'about'}><div>About</div></HomeButton>
                <HomeButton url={'work'}><div>Work</div></HomeButton>
                <HomeButton><s>Projects</s></HomeButton>
                <HomeButton><s>Blog</s></HomeButton>
                <HomeButton><s>Articles</s></HomeButton>
            </div>
        </div>
    )
}