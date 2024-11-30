

import { ActivityIndicator, Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View, FlatList, Image } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import ResponsiveDimensions from './ResponsiveDimensions';


export enum AnimationType {
  fade = "fade",
  slide = "slide",
  none = 'none'
}
interface DropDownProps<T extends Record<string, any>> {
  Icon?: JSX.Element;
  renderValue: string,
  data: T[];
  placeholder: string;
  titleNoOfLines?: number;
  dropdownRowNoOfLines?: number;
  titleStyles?: object;
  titleTextStyles?: object;
  showTitleIcon?: boolean;
  onPressed: () => void;
  dropdownContainerStyles?: object;
  dropdownContainerInnerStyles?: object;
  dropdownContainerInnerChildStyles?: object;
  dropdownContainerInnerChildTextStyles?: object;
  mainContainerStyles?: object;
  indicatorColor?: string;
  onSelected?: (items: T) => void;
  paginationFnCall?: () => void;
  paginationIndex?: number;
  paginationSetIndex?: (index: number) => void;
  visible: boolean;
  onRequestClose?: () => void;
  loader?: boolean;
  showsVerticalScrollIndicator?: boolean;
  animationType?: AnimationType;
  noDataContainer?: React.ReactNode;
  backdropStyles?: object;
}

const DropDown = <T extends Record<string, any>>({
  Icon,
  renderValue,
  data = [],
  placeholder = 'select',
  titleNoOfLines = 1,
  dropdownRowNoOfLines = 1,
  titleStyles = {},
  titleTextStyles = {},
  showTitleIcon = true,
  dropdownContainerStyles = {},
  dropdownContainerInnerStyles = {},
  dropdownContainerInnerChildStyles = {},
  dropdownContainerInnerChildTextStyles = {},
  mainContainerStyles = {},
  indicatorColor = '#1E1E55',
  onSelected = () => { },
  paginationFnCall = () => { },
  paginationIndex = 1,
  paginationSetIndex = () => { },
  onPressed = () => { },
  visible = false,
  onRequestClose = () => { },
  loader = false,
  showsVerticalScrollIndicator = true,
  animationType = AnimationType.none,
  noDataContainer,
  backdropStyles = {},
}: DropDownProps<T>) => {


  const [basePosition, setBasePosition] = useState(0)
  const [topPosition, setTopPosition] = useState(0)
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const viewRef = useRef<View | null>(null);

  const measureView = () => {
    setBasePositionFunction(data?.length)
    viewRef.current?.measure((fx, fy, width, height, px, py) => {
      setPosition({ x: px, y: py });
    });
  };


  const { moderateScale, horizontalScale, verticalScale } = ResponsiveDimensions

  useEffect(() => {
    measureView();
  }, []);

  const setBasePositionFunction = (data: number) => {
    console.log(data, 'data')
    switch (data) {
      case 1:
        setBasePosition(verticalScale(575));
        setTopPosition(verticalScale(55));
        break;
      case 2:
        setBasePosition(verticalScale(525));
        setTopPosition(verticalScale(105));
        break;
      case 3:
        setBasePosition(verticalScale(470));
        setTopPosition(verticalScale(155));
        break;
      case 4:
        setBasePosition(verticalScale(420));
        setTopPosition(verticalScale(205));
        break;
      default:
        setBasePosition(verticalScale(420));
        setTopPosition(verticalScale(205));
        break;
    }
  }


  return (
    <View ref={viewRef} style={[{ width: '100%', position: 'relative', zIndex: 999999, alignSelf: 'center' }, mainContainerStyles]}>
      <TouchableOpacity
        onPress={() => {
          measureView();
          onPressed();
        }}
        style={[{ flex: 1, width: '90%', height: verticalScale(50), backgroundColor: '#fff', alignSelf: 'center', flexDirection: 'row', paddingHorizontal: horizontalScale(15), paddingVertical: verticalScale(5), justifyContent: 'space-between', alignItems: 'center', shadowColor: '#1E1E55', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.17, shadowRadius: 3.05, elevation: 4, borderRadius: moderateScale(5) }, titleStyles]}>
        <Text numberOfLines={titleNoOfLines} style={[{ flex: 1, color: '#1E1E55', fontSize: moderateScale(13), fontWeight: '500', width: '100%', textAlign: 'center', marginRight: horizontalScale(5) }, titleTextStyles]}>
          {placeholder}
        </Text>

        {showTitleIcon && (Icon ? Icon :
          null
        )}
      </TouchableOpacity>

      <Modal
        onRequestClose={onRequestClose}
        visible={visible}
        animationType={animationType}
        presentationStyle="overFullScreen"
        transparent={true}
        style={[{ position: 'relative', width: '100%', height: 'auto', minHeight: verticalScale(250), maxHeight: verticalScale(250), alignSelf: 'center', justifyContent: 'flex-start', alignItems: 'center', marginTop: 5 }, dropdownContainerStyles]}>
        {loader ? (
          <View
            style={[
              {
                width: '90%',
                position: 'absolute',
                alignSelf: 'center',
                top: position.y < basePosition ? position.y + verticalScale(55) : position.y - (topPosition + verticalScale(45)),
                backgroundColor: '#ffffff',
                maxHeight: verticalScale(200),
                minHeight: verticalScale(150),
                justifyContent: 'center',
              },
              dropdownContainerInnerStyles,
            ]}>
            <ActivityIndicator size="large" color={indicatorColor} />
          </View>
        ) : data.length <= 0 ? (
          <View
            style={[
              {
                width: '90%',
                position: 'absolute',
                alignSelf: 'center',
                top: position.y < basePosition ? position.y + verticalScale(55) : position.y - topPosition,
                backgroundColor: '#ffffff',
                maxHeight: verticalScale(200),
                minHeight: verticalScale(150),
                justifyContent: 'center',
              },
              dropdownContainerInnerStyles,
            ]}>
            {noDataContainer
              ?
              noDataContainer
              :
              <View style={{ width: '100%', height: verticalScale(200), backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', alignContent: 'center', }}>
                <Image style={{ height: verticalScale(80), width: horizontalScale(80), }} source={require('../../src/Assets/Images/emptyBox.png')} />
              </View>
            }

          </View>
        ) : (
          <FlatList
            data={data}
            initialNumToRender={10}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={showsVerticalScrollIndicator}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                key={index}
                onPress={async () => { await onSelected(item); }}
                style={[{ position: 'relative', width: '100%', height: verticalScale(50), backgroundColor: '#fff', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', borderColor: '#e6e6e6', borderBottomWidth: 1, padding: moderateScale(5) }, dropdownContainerInnerChildStyles]}>
                <Text numberOfLines={dropdownRowNoOfLines} style={[{ color: '#1E1E55', fontSize: moderateScale(12), fontWeight: '500' }, dropdownContainerInnerChildTextStyles]}>
                  {item[renderValue]}
                </Text>
              </TouchableOpacity>
            )}
            style={[
              {
                width: '90%',
                position: 'absolute',
                alignSelf: 'center',
                top: position.y < basePosition ? position.y + verticalScale(55) : position.y - topPosition,
                backgroundColor: '#ffffff',
                maxHeight: verticalScale(200),
              },
              dropdownContainerInnerStyles,
            ]}
            onEndReachedThreshold={0.1}
            onEndReached={async ({ distanceFromEnd }) => {
              if (data.length > 9) {
                paginationSetIndex(paginationIndex + 1);
                paginationFnCall();
              } else {
                paginationSetIndex(paginationIndex);
                console.log('No more data reached end!');
              }
            }}
          />
        )}
        <TouchableOpacity onPress={onRequestClose} style={[{ flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', position: 'absolute', width: '100%', height: '100%', zIndex: -99 }, backdropStyles]}></TouchableOpacity>
      </Modal>
    </View>
  );
};

export {DropDown};







