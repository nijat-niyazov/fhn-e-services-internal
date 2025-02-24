// import { baseURL } from '@/utils/constants/api'

const baseURL = 'https://fex-dev.fhn.gov.az/api'

type Params = Record<string, string>

const successStatuses = [200, 201, 202, 203, 204] as const
const errorStatuses = [400, 401, 403, 404, 409, 413] as const
const serverStatuses = [500, 501, 502, 503, 504, 599] as const

type HTTPSuccessCodes = (typeof successStatuses)[number]
type HTTPErrorCodes = (typeof errorStatuses)[number]
type HTTPServerCOdes = (typeof serverStatuses)[number]
type HTTPStatusCodes = HTTPSuccessCodes | HTTPErrorCodes | HTTPServerCOdes

export type SuccessReponse<K, D> = { status: Extract<HTTPSuccessCodes, K>; data: D }

export type ErrorType<E = {}> = {
  status: Exclude<HTTPStatusCodes, HTTPSuccessCodes>
  data: { message: string } & E
}

function isSuccess(status: HTTPStatusCodes): status is HTTPSuccessCodes {
  const isSuccess = successStatuses.includes(status as HTTPSuccessCodes)
  return isSuccess
}

function generatUrl(endPoint: string, params?: Params) {
  const queryString = new URLSearchParams(params).toString()
  return !params ? `${baseURL}/${endPoint}` : `${baseURL}/${endPoint}?${queryString}`
}

export const fetchData = async <T>(
  url: string,
  params?: Params,
  token?: string | undefined,
  cacheTag?: string,
): Promise<T> => {
  const fullURL = generatUrl(url, params)

  const headers: Params = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  }

  const options: RequestInit = {
    method: 'GET',
    headers,
    cache: 'no-store',
    ...(cacheTag && { next: { tags: [cacheTag] } }),
  }

  try {
    const response = await fetch(fullURL, options)

    if (!response.ok) {
      console.log(response)
    }

    const data = await response.json()
    const status = response.status

    return { data, status } as T
  } catch (error) {
    console.log(error)

    return error as any
  }
}

export const createData = async <T>(
  url: string,
  payload?: unknown,
  token?: string | undefined,
  params?: any,
): Promise<T> => {
  const fullURL = generatUrl(url, params)
  const isFormData = payload instanceof FormData

  const headers = {
    ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
    ...(token && { Authorization: `Bearer ${token}` }),
  }

  const body = isFormData ? payload : JSON.stringify(payload)

  try {
    const response = await fetch(fullURL, { method: 'POST', headers, body })

    const data = await response.json()
    const status = response.status

    return { data, status } as T
  } catch (error) {
    console.error(error)
    return error as any
  }
}

export const updateData = async <T>(
  url: string,
  payload: any,
  token?: string | undefined,
): Promise<T> => {
  const fullURL = generatUrl(url)

  const isFormData = payload instanceof FormData

  const headers = {
    ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
    ...(token && { Authorization: `Bearer ${token}` }),
  }

  const body = !isFormData ? JSON.stringify(payload) : payload

  try {
    const response = await fetch(fullURL, { method: 'PUT', headers, body })

    const data = await response.json()
    const status = response.status

    return { status, data } as T
  } catch (error) {
    console.log(error)
    return error as any
  }
}

export const editData = async <T>(
  url: string,
  payload: any,
  token?: string | undefined,
): Promise<T> => {
  const fullURL = generatUrl(url)
  const isFormData = payload instanceof FormData

  const headers = {
    ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
    ...(token && { Authorization: `Bearer ${token}` }),
  }

  const body = !isFormData ? JSON.stringify(payload) : payload

  try {
    const response = await fetch(fullURL, { method: 'PATCH', headers, body })

    const data = await response.json()
    const status = response.status

    return { status, data } as T
  } catch (error) {
    console.log(error)
    return error as any
  }
}

export const deleteData = async <T>(
  url: string,
  params: any,
  token?: string | undefined,
): Promise<T> => {
  const fullURL = generatUrl(url, params)

  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  }
  try {
    const response = await fetch(fullURL, { method: 'DELETE', headers })

    const resStatus = response.status
    const status = resStatus !== 204 ? await response.json() : null

    return { status } as T
  } catch (error) {
    console.log(error)

    return error as any
  }
}
