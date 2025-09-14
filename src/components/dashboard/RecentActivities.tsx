import React from 'react'
import { Card, CardHeader,CardTitle,CardDescription, CardContent } from '../ui/card'

interface Props {
    
}

const RecentActivities = (props: Props) => {
    return (
        <Card className='col-span-4 lg:col-span-3'>
            <CardHeader>
                <CardTitle className='text-2xl font-bold'>Recent Activities</CardTitle>
                <CardDescription>
                    You have played total of 6 Games!
                </CardDescription>
            </CardHeader>
            Histories
            <CardContent className='max-h-[580px] overflow-scroll'></CardContent>
        </Card>
    )
}

export default RecentActivities
