import { PropsWithChildren } from 'react'
import Box from '@mui/material/Box'
import { Block } from './Block'

interface StatsProps {
    stats: { [key: string]: number }
}

export const Stats = ({ stats }: PropsWithChildren<StatsProps>) => {
    return (
        <Box component="div" sx={{ display: 'flex', gap: '8px' }}>
            {Object.entries(stats).map(([label, value]) => (
                <Block title={label} key={label}>
                    <Box
                        component="span"
                        sx={{ display: 'flex', flex: 1, justifyContent: 'center', fontSize: 16, fontWeight: 'bold' }}
                    >
                        {value}
                    </Box>
                </Block>
            ))}
        </Box>
    )
}
