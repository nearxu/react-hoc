import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class PopUpComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            show:false
        }
        this.onClose = this.closeHandle.bind(this);

    }
    closeHandle(){
        const html = document.getElementsByTagName('html')[0]
        html.classList.remove('pop-open');
        html.style.height = 'auto';
        window.scrollTo(0,scrollTop);
        this.page.style.display = 'none';
    }
    render(){
        return (
            <div className={cx('popup-component')}
                ref = {page => this.page = page}
            >
                {
                    this.state.show ? 
                    <div className='popup-wrap'
                        ref = {wrap => this.wrap = wrap}
                    >
                    {this.props.children}
                    </div>
                }
            </div>
        )
    }
}