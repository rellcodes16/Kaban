import supabase from "./supabase";

export async function getBoards() {
    const { data, error } = await supabase.from('boards').select('*');

    if (error) {
        throw new Error('Data could not be fetched');
    }

    console.log('data', data);

    return data;
}

export async function createBoards(newBoard){
    const { data, error } = await supabase.from('boards').insert([newBoard]).select()

    if(error){
        console.error(error)
        throw new Error('Board Data could not be created')
    }

    return data;
}