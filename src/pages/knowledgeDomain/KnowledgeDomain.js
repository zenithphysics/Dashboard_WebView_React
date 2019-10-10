import React, { Fragment, useState } from 'react';
import {
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter
} from '../../components/panel/panel.jsx';
import DomainComponent from './DomainComponent.js';

const KnowledgeDomain = () => {
  return (
    <Fragment>
      <div>
        <h1 className='page-header'>
          Knowledge Domains <small></small>
        </h1>
        <Panel>
          <PanelHeader>DOMAINS</PanelHeader>
          <PanelBody>
            <DomainComponent />
          </PanelBody>
          <PanelFooter>
            <button className='btn btn-primary btn-block m-b-5'>
              Add Domain
            </button>
          </PanelFooter>
        </Panel>
      </div>
    </Fragment>
  );
};

export default KnowledgeDomain;
