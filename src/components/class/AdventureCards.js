import React, { Component } from 'react'

class AdventureCards extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <div className="container-fluid">
                <div className="adventureTitle mx-2">
                    <h4>Découvrez les aventures Airbnb</h4>
                    <p>Voyages de plusieurs jours organisés par des experts locaux avec activités, repas et logements compris</p>
                </div>
               <div className="row">
                   {
                       resumeData.adventureCard.map(item=>{
                           let {picture,cardText,cardTitle,cardParagraph} = item;
                           return(
                               <div className="col-md-2">
                                   <div class="card border-0">
                                        <img src={picture} className="card-img-top img-fluid mx-2" alt="..."></img>
                                        <div class="card-body">
                                            <p className="text-start">{cardText}</p>
                                            <p class="card-title">{cardTitle}</p>
                                            <p class="card-text">{cardParagraph}</p>
                                            
                                        </div>
                                    </div>
                               </div>
                           )
                       })
                   }
                </div> 
            </div>
        )
    }
}

export default AdventureCards;