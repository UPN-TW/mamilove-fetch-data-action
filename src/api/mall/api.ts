import request from "../request";
import { transformCuration, transformGroupbuy } from './transform'

export const fetchLatestCuration = async () => {
    const { data } = await request.get('/resource/mall/all')

    return transformCuration(data)
}

export const fetchLatestGroupbuy = async () => {
    const { data } = await request.get('/resource/mall/all')

    return transformGroupbuy(data)
}
