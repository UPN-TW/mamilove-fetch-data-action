const matchPattern = {
    curation: '/market/category/event',
    groupbuy: '/groupbuy'
}   

export const transformCuration = (apiResponse) => {
    const data = apiResponse.data;
    const latestEvents = data.groupbuySets[0].data
    const eventPaths = latestEvents.map(event => event.path)

    const path = eventPaths.find(path => path.includes(matchPattern.curation))
    return path || ''
}

export const transformGroupbuy = (apiResponse) => {
    const data = apiResponse.data;
    const latestEvents = data.groupbuySets[0].data
    const eventPaths = latestEvents.map(event => event.path)

    const path = eventPaths.find(path => path.includes(matchPattern.groupbuy))
    return path || ''
}

