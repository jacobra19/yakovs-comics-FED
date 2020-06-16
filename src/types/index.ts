export interface ComicBook {
    _id?: string,
    isChecked?: boolean
    publish: {
        title: string,
        date: string
    },
    media:{
        coverSrc:string
    },
    series:{
        title: string,
        issue: string,
    },
    description:string,
    saga:{
        title: string,
        currentIssue: string,
        totalIssues: string,
    },
    variant: string,
    creators:{
        [key:string]:string[]
        // coverArtBy: string[],
        // writtenBy: string[],
        // pencilsBy: string[],
        // inksBy: string[],
    }

}

export type Styles = {
    [key:string]:object
}