function convert(s: string, numRows: number): string {
    if(numRows == 1){return s;}
    let offset :number = (numRows-1)*2; // Every row in the zigzag, has an offset which determines its placement. this pattern follows the size of the rows.

    let result : string = ""; // placeholder
    for(let i : number = 0; i < numRows; i++)
    {
        for(let j : number = i; j < s.length; j+=offset)
        {
           // All rows follow this pattern, each char is 1 offset placement from the next.
            result += s[j];
            // The 'inbetween' rows (not start and ending) have 1 extra char
            // This extra char is determined by the pattern j+offset -2 *i
            let inbetween : number = j + offset -2 *i;
            if(i > 0 && i < numRows-1 && inbetween < s.length)
            {
                result += s[inbetween];
            }

        }
    }

    return result;
};
