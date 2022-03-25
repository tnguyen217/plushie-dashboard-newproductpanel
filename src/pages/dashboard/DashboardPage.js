import React, { useState } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'libs/firebase';
import { useNavigate, Outlet } from 'react-router-dom';

import { AppBar } from 'components/appbar';
import { SideBar } from 'components/sidebar';
import { DashBoardStyles, MainContent } from './styles'
import { Panels } from 'components/panels';


function DashBoardPage(props) {

    const [isUser, setIsUser] = useState(false)
    const navigator = useNavigate()

    onAuthStateChanged(auth, user=>{
        if(user){
            setIsUser(true)
        }
        else{
            setIsUser(false)
            //login page
            navigator('/')
        }
    })

    if(isUser){
        return (
            <>
                
                <DashBoardStyles>
                    <SideBar/>
                    <MainContent>
                        <AppBar/>  
                        <Outlet/>
                    </MainContent>
                       
                </DashBoardStyles>
                
            </>
        )
    }
    else{
        return null
    }

}

export default DashBoardPage;