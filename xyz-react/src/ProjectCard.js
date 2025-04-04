import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function ProjectCard({ id, name, description, isJoined, onToggleJoin }) {
    return (
        <Card variant="outlined" sx={{ marginBottom: 2 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" onClick={() => onToggleJoin(id)}>
                    {isJoined ? 'Leave' : 'Join'}
                </Button>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;