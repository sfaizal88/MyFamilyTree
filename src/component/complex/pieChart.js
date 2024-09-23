/**
*
* pieChart.js
* Pie Chart
*
* @author - Faizal
* @date   - 24 June 2020
*
***/
// REACT NATIVE IMPORT
import React, {useEffect, useState} from "react";
import { ActivityIndicator, StyleSheet, View, Modal } from "react-native";
import { PieChart } from 'react-native-svg-charts';

// ALL SHARED FILES
import { Colors } from '../../shared/colors';
import { styles  } from '../../shared/stylesheet';

export const PieChartSVG = (props) => {

  // LOCAL VARIABLE DECLARATION
  const [showLoader, setShowLoader] = useState(props.show);
  const [state, setState]           = useState(props.data);
  const [color, setColor]           = useState([Colors.male, Colors.female]);
  
  const pieData = state.filter((value) => value > 0).map((value, index) => ({
    value,
    svg: {
        fill: color[index],
        onPress: () => console.log('press', index),
    },
    key: `pie-${index}`,
  }));

  // WHEN EVER SHOW PROPS CHANGES
  useEffect(() => {
      setState(props.data);
      console.log('Data: ' + props.data);
  }, [props.data]);
  
  // RENDER HTML
  return (
    <PieChart style={{ height: 200 }} data={pieData} />
  );
}