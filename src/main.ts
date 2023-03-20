import { createInteractiveKey } from '@sfgrp/distinguish'
import '@sfgrp/distinguish/dist/style.css'

const urlParams = new URLSearchParams(window.location.search)
const observationMatrixId = urlParams.get('observation_matrix_id')
const projectToken = urlParams.get('project_token')
const baseURL = urlParams.get('url')

if (observationMatrixId && projectToken && baseURL) {
  const appElement = document.querySelector<HTMLDivElement>('#app')

  createInteractiveKey(appElement, {
    observationMatrixId,
    apiConfig: {
      baseURL,
      projectToken
    }
  })
}
