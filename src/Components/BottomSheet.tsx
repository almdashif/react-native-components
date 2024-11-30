import { Modal, View, Pressable } from 'react-native'
import React from 'react'

export enum AnimationType {
  fade = "fade",
  slide = "slide",
  none = 'none'
}

export enum PresentationStyle {
  pageSheet = "pageSheet",
  fullScreen = "fullScreen",
  formSheet = 'formSheet',
  overFullScreen = 'overFullScreen'
}


interface IBottomSheetProps {
  children?: React.ReactNode;
  visible?: boolean;
  transparent?: boolean;
  onBackButtonPress?: () => void;
  styles?: object;
  onBackDropPress?: () => void;
  animationType?: AnimationType;
  backPressStyles?: object;
  presentationStyle?: PresentationStyle;
}
const BottomSheet: React.FC<IBottomSheetProps> = ({ children, visible = false, onBackButtonPress = () => { }, onBackDropPress = () => { }, styles = {}, transparent = true, animationType = AnimationType.slide, backPressStyles = {}, presentationStyle = PresentationStyle.overFullScreen }) => {

  return (
    <Modal
      visible={visible}
      transparent={transparent}
      onRequestClose={onBackButtonPress}
      animationType={animationType}
      presentationStyle={presentationStyle}
      style={[{ flex: 1, }]}>
      <View style={[{ backgroundColor: 'rgba(0,0,0,0.0)', flex: 1, width: '100%', height: '100%', justifyContent: 'flex-end', alignItems: 'center' }, { ...styles }]}>
        <>
          {children}
        </>

        <Pressable onPress={onBackDropPress} style={[{ flex: 1, width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -999999999999999 }, backPressStyles]}></Pressable>
      </View>




    </Modal>
  )
}

export { BottomSheet }
