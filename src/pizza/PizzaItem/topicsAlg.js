const topicsAlg = topics => {

    // step one: get the topics from the functions args and sort them to slices;
    const slices = [[], [], [], [], [], [], [], []];
    topics.forEach(({ type, onSlices }) => {
        onSlices.forEach(slice => {
            const sliceIndex = slice - 1;
            if (sliceIndex < 8 && sliceIndex > -1) slices[sliceIndex].push(type);
        })
    });

    // step two: make sure that every slice has exactly seven topics in it 
    // by adding existing topics.
    const fullSlices = slices.map(slice => {
        let newSlice = [...slice];
        let count = 0;
        for (let i = newSlice.length + 1; i <= 7; i++) {
            const type = slice[count];
            count++;
            if (count === slice.length) count = 0;
            newSlice.push(type);
            // pushing type to position i
        }
        return newSlice;
    });

    // step three: sort the slices with random order;
    const sortedSlices = fullSlices.map(slice => {
        const newSlice = [...slice];
        return newSlice.sort(() => {
            let random = Math.round(Math.random() * 2);
            // if 2 => 1, if 1 => -1; 
            if (random === 2) return 1;
            else return -1;
        });
    })

    return sortedSlices;
}

export default topicsAlg;