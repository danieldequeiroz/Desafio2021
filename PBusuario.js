import React from 'react';
import {View, StyleSheet} from 'react-native'
import PBusuarioItem from './ItenPB'

const PBusuario = props => {
    const {peoples} = props
    const items = peoples.map(people => {
          return (
              <PBusuarioItem
                    key={people.name.first}
                    people={people}/>
                    onPressItemDetails={onPressItem}/>
          )
        }
      )
    return (
        <View style={style.container}>
            {items}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#e2f977'
    },
}
)

export default PBusuario
