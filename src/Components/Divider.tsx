import { View } from 'react-native'
import React from 'react'

interface IDividerProps {
    style?: object,
}
export const Divider: React.FC<IDividerProps> = ({ style }) => {
    return (
        <View style={[{ width: '100%', height: 1, backgroundColor: '#bfbfbf' }, { ...style }]}></View>
    )
}
