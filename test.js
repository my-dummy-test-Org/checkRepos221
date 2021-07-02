'use strict';

// Get logger
const logger = require('@ibm-pipeline/logging').getLogger('job-docs-builder');
// Get configuration
const Job = require('@ibm-pipeline/jobs-common').Job;

const Config = require('./config');
const nconfLib = require('nconf');
const nconf = new nconfLib.Provider();

// Load libraries
// const Audit = require('@ibm-pipeline/audit');
const GitHub = require('@ibm-pipeline/github');
const joi = require('@hapi/joi');
const util = require('./util');
const doMirror = new Boolean(false); 
const jsonlinter = require('@console/json-linter/lib/json-linter')
DocsBuilderJob.prototype = Object.create(Job.prototype);
function DocsBuilderJob() {
    Job.call(this);
    logger.info('Inside the Repohelper Method');
    this.config = new Config();
    this.moduleName = this.config.MODULE;
  }

  DocsBuilderJob.prototype.ScmCheckout = async function() {
    //eslint-disable-next-line func-style
    logger.info(`Inside SCM checkout method`+jsonlinter)
    const output=jsonlinter.lintJSON('https://github.ibm.com/MD-Harish-Shamim/console-quality-dashboard.git','reports');
    logger.info(`Inside jsonlinter`+output)
    //jsonlinter.lintJSON();  
    
    
  };

  DocsBuilderJob.prototype.run = async function() {
  
    
    this.ScmCheckout();
  };

  module.exports = DocsBuilderJob;
