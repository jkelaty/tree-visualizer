import React from 'react'
import Tooltips from '../../../Tooltips/Tooltips.jsx'

export default class BinarySearchTreeTooltips extends Tooltips {
    getContent(operation) {
        switch( operation ) {
            case 'Search':      return this.SearchTooltips();
            case 'Insert':
            case 'Insert 2':    return this.InsertionTooltips();
            case 'Remove 1':
            case 'Remove 2':
            case 'Remove 3':
            case 'Remove 4':    return this.RemovalTooltips();
            case 'Pre-Order':
            case 'In-Order':
            case 'Post-Order':
            case 'Level Order': return this.TraversalTooltips();
            case 'Initial':
            default:            return this.InitialTooltips();
        }
    }

    InitialTooltips() {
        return (
            <>
                <div style={{background:'blue',width:'100%',height:'100%'}}>
                    {'Initial'}
                </div>
            </>
        );
    }

    InsertionTooltips() {
        return (
            <>
                <div style={{background:'green',width:'100%',height:'100%'}}>
                    {'Insert'}
                </div>
            </>
        );
    }

    RemovalTooltips() {
        return (
            <>
                <div style={{background:'red',width:'100%',height:'100%'}}>
                    {'Remove'}
                </div>
            </>
        );
    }

    SearchTooltips() {
        return (
            <>
                <div style={{background:'yellow',width:'100%',height:'100%'}}>
                    {'Search'}
                </div>
            </>
        );
    }

    TraversalTooltips() {
        return (
            <>
                <div style={{background:'orange',width:'100%',height:'100%'}}>
                    {'Traverse'}
                </div>
            </>
        );
    }
}