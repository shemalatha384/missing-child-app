import React from 'react';
import {Header  , Button , Title , Text ,View} from 'native-base';


const header = ()=>{

    return(
        <View>

            <Header>
                <Title style={{margin:10}}>Photo of Person</Title>
            </Header>
        </View>

    );
}

export default  header;