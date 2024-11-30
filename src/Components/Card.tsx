import React from 'react'
import { TouchableOpacity } from 'react-native'
import ResponsiveDimensions from './ResponsiveDimensions'



interface ICard {
    children?: React.ReactNode,
    style?: object,
    disabled?: boolean,
    onPress?: () => void,
}
const Card: React.FC<ICard> = ({ children, style, disabled = true, onPress = () => { } }) => {
    const { horizontalScale, verticalScale, moderateScale, } = ResponsiveDimensions
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} style={[{
            width: '100%', minHeight: verticalScale(10), borderRadius: moderateScale(10), borderColor: '#bfbfbf', borderWidth: moderateScale(1)
        }, { ...style }]}>
            {children}
        </TouchableOpacity>
    )
}

export { Card }


