import Header from "./template/Header.jsx";
import useBigView from "../helpers/apiBigView.jsx";
import {Link} from "react-router-dom";
import {AiOutlineRollback} from "react-icons/ai";
import {FiChevronsRight} from "react-icons/fi";

function BigView() {

    const data = useBigView();

    return (
        <>
            <Header />
            <div className="big-view">
                <Link to='/' className='big-go-back'><AiOutlineRollback/></Link>
                <div className="big-view-wrapper">
                    {data && (
                        <>
                            <div className="big-top">
                                <div className="big-menu"></div>
                                <div className="big-cont-img">
                                    <img src={data.thumbnail} alt={data.title} className="big-img"/>
                                </div>
                                <div className="big-menu">
                                    <div className="big-genre-wrap">
                                        <span className="big-genre-txt">{data.genre}</span>
                                        <span
                                            className={`big-genre-txt ${data.platform === 'Web Browser' ? 'web' : 'pc'}`}
                                        >{data.platform}</span>
                                    </div>
                                    <div className="big-info">
                                        <span className="big-desc">Publisher: <span className='big-dev'>{data.publisher}</span></span>
                                        <span className="big-desc">Developer: <span className='big-dev'>{data.developer}</span></span>
                                        <span className="big-desc">Release date: <span className='big-dev'>{data.release_date}</span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="big-bot">
                                <h2 className="big-title">{data.title}</h2>
                                <p className="big-text">{data.short_description}</p>
                                <Link to={data.game_url} className="big-btn" target='_blank'>Read More<FiChevronsRight className='hide'/></Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default BigView;