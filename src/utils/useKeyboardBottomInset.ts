import React, { useEffect, useRef, useState } from 'react';
import { Keyboard, Platform, KeyboardEvent } from 'react-native';

export const useKeyboardBottomInset = () => {
    const [bottom, setBottom] = useState(0);
    const subscriptions = useRef([]);
  
    useEffect(() => {
      function onKeyboardChangeIOS(e) {
        if (
          e.startCoordinates &&
          e.endCoordinates.screenY < e.startCoordinates.screenY
        )
          setBottom(e.endCoordinates.height);
        else setBottom(0);
      }

      function onKeyboardChangeAndroid(e) {
        if (e?.endCoordinates?.height){
            setBottom(e.endCoordinates.height);
        }
        else setBottom(0);
    }
    
      if (Platform.OS === 'ios') {
        subscriptions.current = [
          Keyboard.addListener('keyboardWillChangeFrame', onKeyboardChangeIOS),
        ];
      } else {
        subscriptions.current = [
          Keyboard.addListener('keyboardDidHide', onKeyboardChangeAndroid),
          Keyboard.addListener('keyboardDidShow', onKeyboardChangeAndroid),
        ];
      }
      return () => {
        subscriptions.current.forEach((subscription) => {
          subscription.remove();
        });
      };
    }, [setBottom, subscriptions]);
  
    return bottom;
  };