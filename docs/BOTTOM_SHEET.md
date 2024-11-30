# BottomSheet

BottomSheet is a modal which opens from the bottom of the screen. Typically used to display more actions.

[Example](https://github.com/ThakurBallary/react-native-btr-demo/tree/main/src/Components/BottomSheet.tsx)

### Props
Key | Type | Default
----|----|----
visible | bool | false 
onBackButtonPress | function | ()=>null
onBackdropPress | function | ()=>null
transparent | bool | true 
styles | object | {}
animationType | string | ()=>null


  children?: React.ReactNode;
  visible?: boolean;
  transparent?: boolean;
  onBackButtonPress?: () => void;
  styles?: object;
  onBackDropPress?: () => void;
  animationType?: AnimationType;
  backPressStyles?: object;
  presentationStyle?: PresentationStyle;