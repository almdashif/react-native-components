# REACT NATIVE COMPONENTS <img src="src/Images/tsLogo.png" alt="NPM" width="26" />

React Native UI Components :fire: :rocket: :star2:

![npm](https://img.shields.io/npm/v/react-native-components) ![LICENSE MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)

[![NPM](https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png)](https://nodei.co/npm/react-native-btr/)


## Getting Started
```
npm i react-native-components --save
```
or
```
yarn add react-native-components
```

## Latest Release Version 
## ```v0.0.1``` beta



## Bottom Sheet
| Option                  | Type | Default | Required | Description |
| ----------------------- | --- | ------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| visible               | boolean  | false      | No  | Controls the visibility of the bottom sheet. When true, the bottom sheet is `visible`; otherwise, it is `hidden`. |
| transparent               | boolean  | true      | No  | Makes the background `transparent` when set to `true`. |
| onBackButtonPress               | void  | N/A      | No  | Closes the bottom sheet when the back button is pressed on `Android devices`. |
| onBackDropPress               | void  | N/A      | No  |  Closes the bottom sheet when the user taps outside of the bottom sheet area. |
| animationType               | enum  | slide      | No  | 	Specifies the animation type for showing/hiding the bottom sheet. Options include `slide`, `fade`, or `none`. |
| styles               | object  | N/A      | No  | 	Custom styles for the bottom sheet container. |
| backPressStyles               | object  | N/A      | No  |Custom styles for the backdrop container. |
| presentationStyle               | enum  | overFullScreen      | No  | Determines the presentation style. Options include `overFullScreen`, `formSheet`, `fullScreen`, and `pageSheet`.|




## DropDown
| Option                  | Type | Default | Required | Description |
| ----------------------- | --- | ------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Icon| Element  | null      | No  | Optional icon to display in the dropdown. |
| renderValue| string  | ""     | Yes  |The value to display as the selected item in the dropdown. |
| data| array  | [ ]      | Yes  | The array of items to populate the dropdown with. |
| placeholder| string  | "select"      | No  | Placeholder text to display when no item is selected. |
| titleNoOfLines| number  | 1      | No  | Number of lines for the title text. |
| dropdownRowNoOfLines| number  | 1      | No  | Number of lines for the text in each dropdown item. |
| titleStyles| object  | null      | No  | Custom styles for the title container |
| titleTextStyles| object  | null      | No  | Custom styles for the title text. |
| showTitleIcon| boolean  | true      | No  | Whether to show an icon next to the title text. |
| onPressed| function  | null      | Yes  | Function to handle press action on the title. |
| dropdownContainerStyles| object  | null      | No  | Custom styles for the dropdown container. |
| dropdownContainerInnerStyles| object  | null      | No  | Custom styles for the dropdown's inner container. |
| dropdownContainerInnerChildStyles| object  | null      | No  | Custom styles for each item in the dropdown.|
| dropdownContainerInnerChildTextStyles| object  | null      | No  | Custom styles for the text inside each dropdown item. |
| mainContainerStyles| object  | null      | No  | Custom styles for the main dropdown container. |
| indicatorColor| string  | "#1E1E55"      | No  | Color for the dropdown indicator. |
| onSelected| function  | null      | No  | Function to handle the selection of an item from the dropdown. |
| paginationFnCall| function  | null      | No  | Function to handle pagination (optional). |
| paginationIndex| number  | 1      | No  | The current pagination index |
| paginationSetIndex| function  | null      | No  | Function to update the pagination index. eg.,(setState) |
| visible| boolean  | false      | Yes  | Controls the visibility of the dropdown |
| onRequestClose| function  | null      | No  | Function to handle the request to close the dropdown. |
| loader| boolean  | false      | No  | Whether to show a loader while data is being fetched. |
| showsVerticalScrollIndicator| boolean  | true      | No  | Whether to show the vertical scroll indicator in the dropdown. |
| animationType| AnimationType  | AnimationType.none      | No  | Controls the animation type for showing and hiding the dropdown (options: `AnimationType.fade`, `AnimationType.slide`, `AnimationType.none`) AnimationType is available as a Type in this package|
| visible| boolean  | false      | No  | Controls |
| noDataContainer| React.ReactNode  | null      | No  | Custom content to display if no data is available in the dropdown. |
| backdropStyles| object  | null      | No  | Custom styles for the backdrop (the area behind the dropdown). |



## Divider
| Option                  | Type | Default | Required | Description |
| ----------------------- | --- | ------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| style              | object  | N/A      | No  | Custom styles for the `Divder` |




## Card
| Option                  | Type | Default | Required | Description |
| ----------------------- | --- | ------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| style              | object  | N/A      | No  | Custom styles for the `Card` |
| disabled              | boolean  | true      | No  | Makes the card pressable if set to `false` |
| onPress              | void  | N/A      | No  | Allows you to pass a function to be called on press |

## Responsive Dimensions
| Option                  | Type | Default | Required | Description |
| ----------------------- | --- | ------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| deviceWidth              | number  | N/A	      | No  | The width of the device's screen in pixels. |
| deviceHeight              | number  | N/A	      | No  | The height of the device's screen in pixels. |
| responsiveHeight (h) | (h: number) => number  | N/A	      | Yes  | Scales the input height based on the device height. Accepts height in percentage. |
| responsiveWidth(w)              | (w: number) => number  | N/A	      | Yes  | Scales the input width based on the device width. Accepts width in percentage. |
| horizontalScale(size)              | (size: number) => number  | N/A	      | Yes  | Scales the input size horizontally according to the device width. |
| verticalScale(size)             | (size: number) => number  | N/A	      | Yes  | 	Scales the input size vertically according to the device height. |
| moderateScale(size, factor)             | (size: number, factor?: number) => number  | N/A| Yes  | 	Scales the input size based on device dimensions with a moderation factor. |



## Author
[Mohammed Ashif A L](https://github.com/almdashif)

## License
[MIT Licensed](https://github.com/ThakurBallary/react-native-btr/blob/master/LICENSE)





















