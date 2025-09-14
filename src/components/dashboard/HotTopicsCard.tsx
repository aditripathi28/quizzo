import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import CustomWordCloud from '../CustomWordCloud'

interface Props {
    
}

const HotTopicscard = (props: Props) => {
    return (
        <Card className='col-span-4'>
            <CardHeader>
                <CardTitle className='text-2xl font-bold'>Hot Topics</CardTitle>
                <CardDescription>
                    Click ona topic to start a quiz on it!
                </CardDescription>
            </CardHeader>

            <CardContent className='pl-2'>
                <CustomWordCloud/>
            </CardContent>
        </Card>
    )
}

export default HotTopicscard
