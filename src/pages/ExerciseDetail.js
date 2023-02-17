import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import { Detail, ExerciseVideos, SimilarExercises } from '../components'

const ExerciseDetail = () => {
	return (
		<Box>
			<Detail />
			<ExerciseVideos />
			<SimilarExercises />
		</Box>
	)
}

export default ExerciseDetail
