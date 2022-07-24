import React from 'react'

export default function Card({ item }) {
    const format = (input_tanggal) => {
        const tanggalInput = new Date(input_tanggal);
        const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        let formatTanggal = "";
        let hari = days[tanggalInput.getDay()];
        let tanggal = tanggalInput.getDate();
        let bulan = months[tanggalInput.getMonth()];
        let tahun = tanggalInput.getFullYear();
        formatTanggal = hari+', '+tanggal+' '+bulan+ ' '+tahun;
        return formatTanggal;
    }
    return (
        <div className='bg-cyan-50 mx-4 mb-6 px-6 py-6 hover:shadow-lg transition-all h-full duration-500 w-[400px] border-2 rounded-lg'>
            <a href={item.url} target="_blank" rel="noreferrer" className='transition-all duration-500'><h1 className='text-cyan-900 text-xl font-bold hover:underline'>{item.title}</h1></a>
            <img src={item.urlToImage} alt='img-article' className='mt-4 rounded-lg' />
            <h4 className='mt-2 text-cyan-700'>{format(item.publishedAt)}</h4>
            <h4 className='text-cyan-700 font-medium text-sm'>{item.author}</h4>
            <p className='mt-3'>{item.description} <a href={item.url} target="_blank" rel="noreferrer" className='font-semibold hover:underline'>More...</a></p>
        </div>
    )
}
