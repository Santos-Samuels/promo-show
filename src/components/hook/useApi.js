import axios from "axios"
import { useState } from "react"
import useDebounce from "./useDebounce"

const initialRequestInfo = {
    error: null,
    data: null,
    loading: false
}

export default function useApi(config) {
    const [requestInfo, setRequestInfo] = useState(initialRequestInfo)
    const debounceAxios = useDebounce(axios, config.debounceDelay)

    async function call() {
        setRequestInfo({
            ...initialRequestInfo,
            loading: true
        })

        let response = null
        try {
            response = await debounceAxios({
                baseURL: 'http://localhost:5000',
                ...config
            })

            setRequestInfo({
                ...initialRequestInfo,
                data: response.data
            })
        } catch (error) {
            setRequestInfo({
                ...initialRequestInfo,
                error
            })
        }

        if (config.onCompleted) {
            config.onCompleted(response)
        }

        return response
    }

    return [
        call,
        requestInfo
    ]
}