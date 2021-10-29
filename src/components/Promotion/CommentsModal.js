import useApi from 'components/hook/useApi'
import LayoutModal from 'components/Layout/Modal'
import { useEffect, useState } from 'react'
import PromotionCommentsTree from 'components/Promotion/CommentsTree'
 
 const PromotionCommentsModal = ({ promotionId, onClickClose }) => {
    const [comment, setComment] = useState('')

    const [load, loadStatus] = useApi({
        url: '/comments',
        params: { promotionId, _expand: 'user' }
    })

    const [sendComment, sendCommentStatus] = useApi({
        url: '/comments',
        method: 'POST'
    })

    useEffect(() => {
        load()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function onSubmit(ev) {
        ev.preventDefault()

        try {
            await sendComment({
                data: {
                    userId: 1,
                    promotionId,
                    comment
                }
            })

            setComment('')
            load()
        } catch (e) {
            
        }
        
    }

    console.log(loadStatus.data);

    return (
        <LayoutModal isOpen={Boolean(promotionId)} onClickClose={onClickClose}>
            <section className="space-y-4">
                <h1 className="text-xl font-semibold text-blue-500"><i className="bi bi-chat-dots-fill"></i> Comentários</h1>
                
                <form onSubmit={onSubmit} className="flex flex-nowrap items-center">
                    <textarea className="w-full p-2 rounded-lg resize-none h-11 mr-2" name="newComment" id="newComment" placeholder="Escreva um comentário..." onChange={(ev) => setComment(ev.target.value)} value={comment} />
                    <button disabled={sendCommentStatus.loading} className={ "bg-blue-500 hover:bg-blue-600 transition duration-500 easy-in-out rounded-md py-2 px-2 text-white w-32" + (sendCommentStatus.loading ? ' opacity-50' : '')}>Comentar</button>          
                </form>
                
                <PromotionCommentsTree comments={loadStatus.data} />
            </section>
        </LayoutModal>
    )
 }

 export default PromotionCommentsModal