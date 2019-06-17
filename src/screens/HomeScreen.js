import React, { Component } from "react";
import { Cell, Section, TableView } from "react-native-tableview-simple";

import {
    ActivityIndicator,
    AppRegistry,
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    View
} from "react-native";

const CellVariant = (props) => (    
    <Cell
      {...props}
      cellContentView={
        <View
          style={{ alignItems: 'center', flexDirection: 'row', flex: 1, paddingVertical: 10 }}
        >
          <Text
            allowFontScaling
            numberOfLines={1}
            style={{ flex: 1, fontSize: 20 }}
          >
            {props.title}
          </Text>
        </View>
      }
    />
  );
  
class HomeScreen extends Component{        
    render(){
        return(
            <ScrollView contentContainerStyle={styles.stage}>
                <TableView>
                    <Section header="Section Header 1" >
                        <Cell 
                        cellStyle="Basic" 
                        title="Basic" 
                        onPress={() => console.log("open Help/FAQ")}                            
                        />
                    </Section>
                </TableView>
            </ScrollView>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    stage: {
        backgroundColor: "#EFEFF4",
        // paddingTop: 20,
        paddingBottom: 20    
      }
    
});